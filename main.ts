import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

await serve(
	async (request: Request) => {
		
		const url = new URL(request.url);
		const filepath = url.pathname ? decodeURIComponent(url.pathname) : "";
		
		if(filepath === '/privacy') return new Response(`
			<html>
				<body>
					<h1>Privacy Policy</h1>
					<p>We don't use any data.</p>
					<p>We are not responsible for misuse of the application.</p>
				</body>
			</html>
		`, {
			headers: {
				"content-type": "text/html",
			},})
		
	}, { port: 1994 });