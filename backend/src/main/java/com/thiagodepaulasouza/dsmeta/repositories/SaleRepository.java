package com.thiagodepaulasouza.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiagodepaulasouza.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
