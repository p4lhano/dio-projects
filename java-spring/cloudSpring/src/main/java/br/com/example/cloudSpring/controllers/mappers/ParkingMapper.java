package br.com.example.cloudSpring.controllers.mappers;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import br.com.example.cloudSpring.controllers.dto.ParkingDTO;
import br.com.example.cloudSpring.models.Parking;

@Component
public class ParkingMapper {
	
	private static final ModelMapper MODEL_MAPPER = new ModelMapper();
	
	public ParkingDTO parkingDTO(Parking parking) {
		return MODEL_MAPPER.map(parking, ParkingDTO.class);
	}

	public List<ParkingDTO> toParkingDTO(List<Parking> parkingList) {
		return parkingList.stream().map(this::parkingDTO).collect(Collectors.toList());
	}
	
}
