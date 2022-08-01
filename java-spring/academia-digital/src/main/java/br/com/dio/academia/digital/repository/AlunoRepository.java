package br.com.dio.academia.digital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.dio.academia.digital.entity.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {
	
	
}
