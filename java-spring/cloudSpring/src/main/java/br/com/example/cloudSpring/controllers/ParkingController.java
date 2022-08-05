package br.com.example.cloudSpring.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.example.cloudSpring.controllers.dto.ParkingCreateDTO;
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
		Parking parking = parkingService.findById(id);
		
		return ResponseEntity.ok(parkingMapper.toParkingDTO(parking));
	}
	
	@PostMapping
	public ResponseEntity<ParkingDTO> create(@RequestBody ParkingCreateDTO createObj) {
		Parking parking = parkingMapper.toParking(createObj);
		parkingService.create(parking);
//		return URI.create("parking/" + parking.getId()); // add return URI
		return ResponseEntity.status(HttpStatus.CREATED).body(parkingMapper.toParkingDTO(parking));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity deleteById(@PathVariable String id) {
		parkingService.delete(id);
		
		return ResponseEntity.noContent().build();
	}
}





