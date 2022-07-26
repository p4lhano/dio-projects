import br.com.dio.desafio.dominio.Bootcamp;
import br.com.dio.desafio.dominio.Curso;
import br.com.dio.desafio.dominio.Dev;
import br.com.dio.desafio.dominio.Mentoria;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Curso curso1 = new Curso();
        curso1.setTitulo("curso java");
        curso1.setDescricao("descrição curso java");
        curso1.setCargaHoraria(8);

        Curso curso2 = new Curso();
        curso2.setTitulo("curso .NET");
        curso2.setDescricao("Curso de .NET com C#");
        curso2.setCargaHoraria(4);

        Mentoria mentoria = new Mentoria();
        mentoria.setTitulo("mentoria de java");
        mentoria.setDescricao("descrição mentoria java");
        mentoria.setData(LocalDate.now());


        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setNome("Bootcamp Java Developer");
        bootcamp.setDescricao("Descrição Bootcamp Java Developer");
        bootcamp.getConteudos().add(curso1);
        bootcamp.getConteudos().add(curso2);
        bootcamp.getConteudos().add(mentoria);

        Dev devNew = new Dev();
        devNew.setNome("Camila");
        devNew.inscreverBootcamp(bootcamp);
        System.out.println("Conteúdos Inscritos 1:" + devNew.getConteudosInscritos());
        devNew.progredir();
        devNew.progredir();
        System.out.println("-");
        System.out.println("Conteúdos Inscritos 1:" + devNew.getConteudosInscritos());
        System.out.println("Conteúdos Concluídos 1:" + devNew.getConteudosConcluidos());
        System.out.println("XP:" + devNew.calcularTotalXp());

        System.out.println("-------");

        Dev devNovo = new Dev();
        devNovo.setNome("Joao");
        devNovo.inscreverBootcamp(bootcamp);
        System.out.println("Conteúdos Inscritos 2:" + devNovo.getConteudosInscritos());
        devNovo.progredir();
        devNovo.progredir();
        System.out.println("-");
        System.out.println("Conteúdos Inscritos 2:" + devNovo.getConteudosInscritos());
        System.out.println("Conteúdos Concluidos 2:" + devNovo.getConteudosConcluidos());
        System.out.println("XP:" + devNovo.calcularTotalXp());

    }

}
