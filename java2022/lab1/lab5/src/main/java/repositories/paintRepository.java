package repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import paint.Paint;

public interface paintRepository extends PagingAndSortingRepository<Paint, Integer> {

  List<Paint> findByTitle(@Param("title") String title);

}