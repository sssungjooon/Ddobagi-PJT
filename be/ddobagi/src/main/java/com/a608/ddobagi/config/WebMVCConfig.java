package com.a608.ddobagi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMVCConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("http://j8a608.p.ssafy.io:3000",
				"http://localhost:3000", "http://127.0.0.1:3000", "https://j8a608.p.ssafy.io")
			.allowedMethods("*")
			.allowedHeaders("*");

	}
}
