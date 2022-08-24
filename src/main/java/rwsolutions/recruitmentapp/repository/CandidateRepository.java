package rwsolutions.recruitmentapp.repository;

import rwsolutions.recruitmentapp.model.Candidate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CandidateRepository extends CrudRepository<Candidate, Long> {
    @Override
    Optional<Candidate> findById(Long aLong);


}
