package main

import (
	"bytes"
	"calculus/charts"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func ServeExample(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	if r.URL.Path == "/eg/mline" {
		tpl, err := template.ParseFiles("tpls/eg/egmline.html")
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		tpl.Execute(w, r.Host)
		return
	}

	if r.URL.Path == "/eg/mlinedaul" {
		tpl, err := template.ParseFiles("tpls/eg/egmlinedaul.html")
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		tpl.Execute(w, r.Host)
		return
	}

	if r.URL.Path == "/eg/pie" {
		tpl, err := template.ParseFiles("tpls/eg/egpie.html")
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		//dataT的内容可以自动生成
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

		//用dataT生成js所需要的字符串
		var strBuf bytes.Buffer
		for i := 0; i < len(dataT); i++ {
			strBuf.WriteString("[")
			strBuf.WriteString(fmt.Sprintf("'%s', %d", dataT[i].key, dataT[i].value))
			strBuf.WriteString("]")
			if i != len(dataT)-1 {
				strBuf.WriteString(",\n")
			}
		}

		//JS里面有个DataRow字段，该字段类型必须是template.JS！
		tpl.Execute(w, struct{ DataRows template.JS }{DataRows: template.JS(strBuf.String())})
		return
	}

	http.Error(w, "Not found", 404)
}

func main() {
	log.Println("Starting serivces...")

	//创建https文件服务
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/eg/", ServeExample)
	http.HandleFunc("/ch/", charts.ServeChart)

	err := http.ListenAndServe(":9527", nil)
	if err != nil {
		log.Fatal(err)
	}
	//代码不会执行到这里来！！
}
