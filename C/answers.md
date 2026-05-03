# Task C: Xero API Questions Answers

## C1. How would you prove that our Xero API connection is working before checking invoices?
- Perform a lightweight health check using the Xero `GET /health` or `GET /organisation` endpoint.
  - `GET /organisation` is preferred, as it requires valid authentication and returns basic tenant info.
  - If this request succeeds with a 200 OK response, the connection is confirmed.

## C2. If connections works but GET /invoices fails, what would you check?
1. **Permissions**: Ensure the OAuth2 token has the `accounting.transactions.read` scope.
2. **Tenant ID**: Verify the correct `xero-tenant-id` header is being sent.
3. **Rate limits**: Check if you have exceeded the API rate limits (Xero enforces 60 requests/minute).
4. **Filter parameters**: Validate query parameters (e.g., `where`, `order`) are correctly formatted.
5. **Network/proxy**: Check if the network is blocking requests to the Xero API endpoint.

## C3. What endpoint would you call to check invoices?
The primary endpoint is `GET /api.xro/2.0/Invoices`. This returns a list of all invoices, with support for filtering, pagination, and sorting.

## C4. How would you check one specific invoice?
Use the `GET /api.xro/2.0/Invoices/{InvoiceID}` endpoint, passing the specific invoice's GUID as the path parameter. This returns a single invoice object with full details.

## C5. If the invoice API returns 429, how should the backend handle it?
A 429 status code indicates rate limiting. The backend should:
1. Implement exponential backoff retries (e.g., 1s, 2s, 4s delays) with a maximum retry limit.
2. Respect the `Retry-After` header if provided by the API.
3. Log the event for monitoring and alerting.
4. Throttle subsequent requests to avoid hitting the limit again.