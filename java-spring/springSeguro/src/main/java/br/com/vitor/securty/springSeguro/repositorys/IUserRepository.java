package br.com.vitor.securty.springSeguro.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.vitor.securty.springSeguro.entitys.User;

public interface IUserRepository extends JpaRepository<User, Integer> {
	@Query("SELECT e FROM user_sys e JOIN FETCH e.roles WHERE e.username= (:username)")
    public User findByUsername(@Param("username") String username);
}
