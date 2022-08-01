package br.com.dio.academia.digital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.dio.academia.digital.entity.Aluno;
import br.com.dio.academia.digital.entity.form.AlunoForm;
import br.com.dio.academia.digital.service.impl.AlunoServiceImpl;

@RestController
@RequestMapping("/alunos")
public class AlunoController {
	
	@Autowired
	private AlunoServiceImpl service;
	
	@GetMapping
	public List<Aluno> getAll(){
		return service.getAll();
	}
	
	@PostMapping
	public Aluno create(@RequestBody AlunoForm form) {
		return service.create(form);
	}
}