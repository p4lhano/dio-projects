package br.com.dio.academia.digital.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dio.academia.digital.entity.AvaliacaoFisica;
import br.com.dio.academia.digital.entity.form.AvaliacaoFisicaForm;
import br.com.dio.academia.digital.entity.form.AvaliacaoFisicaUpdateForm;
import br.com.dio.academia.digital.repository.AlunoRepository;
import br.com.dio.academia.digital.repository.AvaliacaoFisicaRepository;
import br.com.dio.academia.digital.service.IAvaliacaoFisicaService;

@Service
public class AvaliacaoFisicaServiceImpl implements IAvaliacaoFisicaService {
	
	@Autowired
	private AvaliacaoFisicaRepository repository;
	
	@Autowired
	private AlunoRepository alunoRepository;

	@Override
	public AvaliacaoFisica create(AvaliacaoFisicaForm form) {
		// TODO Auto-generated method stub
		AvaliacaoFisica novaAva = new AvaliacaoFisica();
		novaAva.setAluno(alunoRepository.findById(form.getAlunoId()).get());
		novaAva.setAltura(form.getAltura());
		novaAva.setPeso(form.getPeso());
		return repository.save(novaAva);
	}

	@Override
	public AvaliacaoFisica get(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<AvaliacaoFisica> getAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public AvaliacaoFisica update(Long id, AvaliacaoFisicaUpdateForm formUpdate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}

}
