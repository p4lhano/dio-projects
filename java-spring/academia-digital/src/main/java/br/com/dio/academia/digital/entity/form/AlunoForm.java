package br.com.dio.academia.digital.entity.form;

import java.time.LocalDate;

import lombok.Data;

@Data
public class AlunoForm {

  private String nome;

  private String cpf;

  private String bairro;

  private LocalDate dataDeNascimento;

public String getNome() {
	return nome;
}

public String getCpf() {
	return cpf;
}

public String getBairro() {
	return bairro;
}

public LocalDate getDataDeNascimento() {
	return dataDeNascimento;
}
}
