package br.com.example.cloudSpring.services;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.com.example.cloudSpring.controllers.dto.ParkingDTO;
import br.com.example.cloudSpring.exception.NotFondException;
import br.com.example.cloudSpring.models.Parking;

@Service
public class ParkingService {
	private static Map<String, Parking> parkingMap = new HashMap<String, Parking>();
	
	static {
		var id = getUUID();
		Parking parking = new Parking(id,"AAA0000","PR","CAR","COLOR");
		parkingMap.put(id, parking);
		id = getUUID();
		parking = new Parking(id,"BBB0000","PR","CAR","COLOR");
		parkingMap.put(id, parking);
	}

	private static String getUUID() {
		// TODO Auto-generated method stub
		return UUID.randomUUID().toString().replace("-", "");
	}
	
	public List<Parking> getAll() {
		return parkingMap.values().stream().collect(Collectors.toList());
	}

	public Parking findById(String id) {
		Parking park = parkingMap.get(id);
		if (park == null) 
			throw new NotFondException(id);
		return park;
	}

	public Parking create(Parking newParking) {
		newParking.setId(getUUID());
		newParking.setEntryDate(LocalDateTime.now());
		
		parkingMap.put(newParking.getId(), newParking);
		
		return parkingMap.get(newParking.getId());
	}

	public void delete(String id) {
		Parking p =  findById(id);
		parkingMap.remove(p.getId());
	}
	
}
