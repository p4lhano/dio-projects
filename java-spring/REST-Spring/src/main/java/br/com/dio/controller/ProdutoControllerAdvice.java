package br.com.dio.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import br.com.dio.execption.ProductNullException;

@ControllerAdvice
public class ProdutoControllerAdvice extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(ProductNullException.class)
	public ResponseEntity<Object> captureErrors() {
		
		Map<String, Object> body = new HashMap<String, Object>();
		
		body.put("message", "Cadastro incompleto");
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
	}
	
}
