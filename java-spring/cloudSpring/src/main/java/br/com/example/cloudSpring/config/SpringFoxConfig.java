//package br.com.example.cloudSpring.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistration;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//
//import springfox.documentation.builders.PathSelectors;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;
//
//@Configuration
//@EnableSwagger2WebMvc
//public class SpringFoxConfig extends WebMvcConfigurerAdapter {
//	 @Bean
//	    public Docket api() { 
//	        return new Docket(DocumentationType.SWAGGER_2)  
//	          .select()                                  
//	          .apis(RequestHandlerSelectors.any())              
//	          .paths(PathSelectors.any())                          
//	          .build();                                           
//	    }
//	 @Override
//	 public void addResourceHandlers(ResourceHandlerRegistration registry) {
//		    registry.addResourceHandler("swagger-ui.html")
//		      .addResourceLocations("classpath:/META-INF/resources/");
//
//		    registry.addResourceHandler("/webjars/**")
//		      .addResourceLocations("classpath:/META-INF/resources/webjars/");
//		}
//}
