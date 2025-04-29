package com.healthcare.service.impl;

import com.healthcare.service.ChatbotService;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class ChatbotServiceImpl implements ChatbotService {

    private final String API_KEY = "2e341fb0a6573f9c2b32d1dceabd03e5a33c7f2a28b618ead2e4ed3c64441201"; // Replace with your API Key

    private final WebClient webClient = WebClient.create("https://api.together.xyz");

    @Override
    public String askQuestion(String question) {
        String requestBody = """
            {
              "model": "mistralai/Mixtral-8x7B-Instruct-v0.1",
              "prompt": "%s",
              "temperature": 0.7,
              "max_tokens": 300
            }
            """.formatted(question);

        Mono<String> responseMono = webClient.post()
                .uri("/v1/completions")
                .header("Authorization", "Bearer " + API_KEY)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class);

        return responseMono.block();
    }
}
