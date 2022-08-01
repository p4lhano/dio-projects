package br.com.dio.academia.digital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.dio.academia.digital.entity.AvaliacaoFisica;
import br.com.dio.academia.digital.entity.form.AvaliacaoFisicaForm;
import br.com.dio.academia.digital.service.impl.AvaliacaoFisicaServiceImpl;


@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoFisicaController {
	
	@Autowired
	private AvaliacaoFisicaServiceImpl service;
	
	@GetMapping
	public List<AvaliacaoFisica> getAll(){
		return service.getAll();
	}
	
	@PostMapping
	public AvaliacaoFisica create(@RequestBody AvaliacaoFisicaForm ava) {
		return service.create(ava);
	}
	
}
