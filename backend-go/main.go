package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type HealthResponse struct {
	Status string `json:"status"`
	Time   string `json:"time"`
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	resp := HealthResponse{
		Status: "ok",
		Time:   time.Now().Format(time.RFC3339),
	}

	json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/api/health", healthHandler)

	log.Println("Go backend listening on :3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
