package employees

type Person struct {
	Name string
	Age  int
	Role string
}

func (p *Person) IncreaseAge() { // * dereferences a pointer (access the value stored in the address)
	p.Age += 1
}
