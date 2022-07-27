package com.dio.vitor.springBoot;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {

	public static void main(String[] args) {
		
		ApplicationContext factory =  new AnnotationConfigApplicationContext(AppConfig.class);
		
		Livro livro = factory.getBean(Livro.class);
		livro.setNome("nomeLivro");
		livro.toString();

	}

}
