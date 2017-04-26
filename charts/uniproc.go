package charts

import (
	"bytes"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func ServeChart(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)

	if r.Method != "GET" {
		http.Error(w, "Method not allowed", 405)
		return
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	if r.URL.Path == "/charts/pie" {
		tpl, err := template.ParseFiles("tpls/egdrawpie.html")
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		//后面数据可以自动生成
		dataT := []struct {
			key   string
			value int
		}{
			{"Mushrooms", 3},
			{"Onions", 1},
			{"Olives", 1},
			{"Zucchini", 1},
			{"Pepperoni", 2},
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
		tpl.Execute(w, struct{ DataRows template.JS }{DataRows: template.JS(strBuf.String())})
		return
	}

	http.Error(w, "Not found", 404)
	return
}
