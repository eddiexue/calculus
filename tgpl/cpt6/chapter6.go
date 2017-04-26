package main

import (
	"bytes"
	"fmt"
	"html/template"
	"image/color"
	"log"
	"math"
	"os"
)

type Point struct{ X, Y float64 }

// same thing, but as a method of the Point type
func (p Point) Distance(q Point) float64 {
	return math.Hypot(q.X-p.X, q.Y-p.Y)
}

func (p *Point) ScaleBy(factor float64) {
	p.X *= factor
	p.Y *= factor
}

type ColoredPoint struct {
	*Point
	Color color.RGBA
}

var i int

func main() {
	const tpl = `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>{{.Title}}</title>
	</head>
	<body>
		{{range .Items}}<div>{{ . }}</div>{{else}}<div><strong>no rows</strong></div>{{end}}
	</body>
</html>`

	check := func(err error) {
		if err != nil {
			log.Fatal(err)
		}
	}
	t, err := template.New("webpage").ParseFiles("../../tpls/piecharteg.html")
	check(err)

	data := struct {
		Title string
		Items []string
	}{
		Title: "My page",
		Items: []string{
			"My photos",
			"My blog",
		},
	}
	log.Printf("%+v", data)

	//后面数据可以自动生成
	dataT := []struct {
		key   string
		value int
	}{
		{"Mushrooms", 3},
		{"Onions", 1},
		{"Olives", 1},
	}

	var strBuf bytes.Buffer
	for i := 0; i < len(dataT); i++ {
		strBuf.WriteString("[")
		strBuf.WriteString(fmt.Sprintf("'%s', %d", dataT[i].key, dataT[i].value))
		strBuf.WriteString("]")
		if i != len(dataT)-1 {
			strBuf.WriteString(",\n")
		}
	}
	strBuf.WriteString("\n")

	err = t.Execute(os.Stdout, struct{ DataRows string }{DataRows: strBuf.String()})
	check(err)

	noItems := struct {
		Title string
		Items []string
	}{
		Title: "My another page",
		Items: []string{},
	}

	err = t.Execute(os.Stdout, noItems)
	check(err)
}
