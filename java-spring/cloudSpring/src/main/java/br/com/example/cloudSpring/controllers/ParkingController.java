package br.com.example.cloudSpring.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.example.cloudSpring.controllers.dto.ParkingDTO;
import br.com.example.cloudSpring.controllers.mappers.ParkingMapper;
import br.com.example.cloudSpring.models.Parking;
import br.com.example.cloudSpring.services.ParkingService;

@RestController
@RequestMapping("/parking")
public class ParkingController {
	
	
	/*
	 * Da-se devido as novas boas praticas recomendas pelo Springm em não utilizar o @@Autowired
	 * */
	private final ParkingService parkingService;
	private final ParkingMapper parkingMapper;
	
	public ParkingController(ParkingService parkingService, ParkingMapper parkingMapper) {
		this.parkingService = parkingService;
		this.parkingMapper = parkingMapper;
	}
	
	@GetMapping
	public ResponseEntity<List<ParkingDTO>> getAll() {
		List<Parking> parkingList = parkingService.getAll();
		List<ParkingDTO> result = parkingMapper.toParkingDTO(parkingList);
		
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ParkingDTO> getById(@PathVariable String id) {
		System.out.println("Solicitou id:"+id);
		
		return ResponseEntity.ok(null);
	}
}
