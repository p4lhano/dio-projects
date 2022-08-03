package br.com.example.cloudSpring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class NotFondException extends RuntimeException {

	public NotFondException(String recurso) {
		super("Recurso buscado não existe: " + recurso);
	}
	
}
