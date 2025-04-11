package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class NoteController {

    // GET /hello -> "Hello, world!"
    @GetMapping("/hello")
    public List<Note> sayHello() {
        System.out.println("some logging");
        return List.of(new Note("some title1", "some body1"), new Note("some title2", "some body2"));
    }


}
