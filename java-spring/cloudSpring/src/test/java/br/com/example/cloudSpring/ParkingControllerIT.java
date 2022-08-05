package br.com.example.cloudSpring;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import io.restassured.RestAssured;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ParkingControllerIT {
	
	@LocalServerPort
	private int randomPort;
	
	@BeforeEach
	public void setUpTest() {
		RestAssured.port = randomPort;
	}
	
	@Test
	void whenGetAllThenCheckResult() {
		RestAssured.given()
			.get("/parking")
			.then()
			.body("license[0]", null)
			.extract().response().body().prettyPrint();
		
	}
	
	@Test
	void create() {
		
	}

}
