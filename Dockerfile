FROM denoland/deno:alpine
WORKDIR /app
COPY . /app
ENV PORT=8000
RUN deno cache index.ts
CMD deno run --allow-env --allow-net index.ts
