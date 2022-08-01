package br.com.dio.academia.digital.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dio.academia.digital.entity.Aluno;
import br.com.dio.academia.digital.entity.form.AlunoForm;
import br.com.dio.academia.digital.entity.form.AlunoUpdateForm;
import br.com.dio.academia.digital.repository.AlunoRepository;
import br.com.dio.academia.digital.service.IAlunoService;

@Service
public class AlunoServiceImpl implements IAlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;

	@Override
	public Aluno create(AlunoForm form) {
		// TODO Auto-generated method stub
		Aluno aluno = new Aluno();
		aluno.setNome(form.getNome());
		aluno.setBairro(form.getBairro());
		aluno.setCpf(form.getCpf());
		aluno.setDataDeNascimento(form.getDataDeNascimento());
		return alunoRepository.save(aluno);
	}

	@Override
	public Aluno get(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Aluno> getAll() {
		// TODO Auto-generated method stub
		return alunoRepository.findAll();
	}

	@Override
	public Aluno update(Long id, AlunoUpdateForm formUpdate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}

}
