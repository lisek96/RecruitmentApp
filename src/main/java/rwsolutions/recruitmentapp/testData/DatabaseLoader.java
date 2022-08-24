package rwsolutions.recruitmentapp.testData;

import rwsolutions.recruitmentapp.model.Candidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import rwsolutions.recruitmentapp.repository.CandidateRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CandidateRepository repository;

    @Autowired
    public DatabaseLoader(CandidateRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        repository.save(new Candidate("Rafał", "Wójcik"));
    }
}
