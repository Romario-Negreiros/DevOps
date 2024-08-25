package main

import (
	"fmt"
	"hello-world/employees"
	"os"
	"strconv"
)

func main() {

}

func errAndDefer() {
	if len(os.Args) != 2 {
		os.Exit(1)
	}

	n, err := strconv.Atoi(os.Args[1])

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(n)
	}

	file, err := os.Open("go.mod")

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(file)
	}

	defer file.Close() // O defer inclui a expressão numa pilha a ser executada quando a função em que ele foi utilizado for retornar
}

func maps() {
	employees := make(map[string]int)
	employees["Romario"] = 5000
	employees["Maria"] = 125

	employee, exists := employees["Romario"]
	fmt.Println(employee, exists, len(employees))
}

func arrayAndSlices() {
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

func structs() {
	person := &employees.Person{ // & gets the address
		Name: "Romario Negreiros",
		Age:  20,
		Role: "Developer",
	}

	fmt.Println(person.Name, person.Age, person.Role)
	person.IncreaseAge()
	fmt.Println(person.Name, person.Age, person.Role)

	person2 := new(employees.Person)
	person2.Name = "Maria"
	person2.Age = 19
	person2.Role = "House Keeper"

	fmt.Println(person2.Name, person2.Age, person2.Role)
	person2.IncreaseAge()
	fmt.Println(person2.Name, person2.Age, person2.Role)
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
