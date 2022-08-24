package rwsolutions.recruitmentapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${rest-api-context-path}")
public class CandidateController {

    @GetMapping("/helloWorld")
    String hello(){
        return "hello";
    }
}
