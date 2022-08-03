//package br.com.example.cloudSpring.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.stereotype.Component;
//
//import springfox.documentation.builders.ApiInfoBuilder;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.service.Contact;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;
//import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;
//
//@Configuration
//@EnableSwagger2
//public class SwaggerConfig {
//	@Bean
//	public Docket api() {
//		return new Docket(DocumentationType.SWAGGER_2)
//				.select()
//				.apis(RequestHandlerSelectors.basePackage("br.com.example.cloudSpring"))
//				.build()
//				.apiInfo(metaData());
//	}
//
//	private ApiInfo metaData() {
//		return new ApiInfoBuilder()
//				.title("Parkings API")
//				.version("1.0.0")
//				.license("Apache Licence Version 2.0")
//				.licenseUrl("https://www.apache.org/")
//			.build();
//	}
//
//	private Contact getContact() {
//		return new Contact("Vitor Palhano", "https://www.linkedin.com/in/vitor-palhano", "vitorpalhano2014@gmail.com");
//	}
//}
