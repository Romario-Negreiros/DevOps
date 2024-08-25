package main

import (
	"fmt"
	"os"
)

func main() {
	// Array => fixed size
	var wages [10]int
	wages[0] = 1000

	fmt.Println(wages)

	// Slice => dynamic size
	years := []int{2021}

	titles := make([]int, 10)

	for i := 0; i < 10; i++ {
		titles[i] = i

		years = append(years, 2024)
	}

	fmt.Println(years)

	for _, title := range titles { // _ = index
		fmt.Print(title, " ")
	}
}

type Person struct {
	name string
	age  int
	role string
}

func structs() {
	person := &Person{ // & gets the address
		name: "Romario Negreiros",
		age:  20,
		role: "Developer",
	}

	fmt.Println(person.name, person.age, person.role)
	person.increaseAge()
	fmt.Println(person.name, person.age, person.role)

	person2 := new(Person)
	person2.name = "Maria"
	person2.age = 19
	person2.role = "House Keeper"

	fmt.Println(person2.name, person2.age, person2.role)
	person2.increaseAge()
	fmt.Println(person2.name, person2.age, person2.role)
}

func (p *Person) increaseAge() { // * dereferences a pointer (access the value stored in the address)
	p.age += 1
}

func varsAndFunctions() {
	var name string = "Romario Negreiros"
	age, role := 20, getRole(name)

	fmt.Println(name)
	fmt.Println(age)
	fmt.Println(role)
	fmt.Println(os.Args)

	a, b := getRandomNumbers()
	fmt.Println(a, b)
}

func getRole(name string) string {
	if name == "Romario Negreiros" {
		return "Developer"
	} else {
		return "Unknown"
	}
}

func getRandomNumbers() (int, int) {
	return 4, 5
}
