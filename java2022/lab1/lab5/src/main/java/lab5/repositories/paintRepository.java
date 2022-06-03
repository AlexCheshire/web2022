package lab5.repositories;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import lab5.paint.Paint;

@RepositoryRestResource
@CrossOrigin(origins = "*")
//@RepositoryRestResource(collectionResourceRel = "paint", path = "paint")
public interface paintRepository extends JpaRepository<Paint, Integer> {

  //List<Paint> findByTitle(@Param("title") String title);

}