FROM golang:1.25-alpine AS build

WORKDIR /app
COPY . .
RUN go build -o app

FROM alpine:latest
WORKDIR /app
COPY --from=build /app/app .
EXPOSE 3000
CMD ["./app"]
