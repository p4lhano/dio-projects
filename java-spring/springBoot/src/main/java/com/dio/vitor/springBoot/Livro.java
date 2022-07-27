package com.dio.vitor.springBoot;

public class Livro {
	private String nome;
	private String cod;
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCod() {
		return cod;
	}
	public void setCod(String cod) {
		this.cod = cod;
	}
	@Override
	public String toString() {
		return "Livro [nome=" + nome + ", cod=" + cod + "]";
	}
}
