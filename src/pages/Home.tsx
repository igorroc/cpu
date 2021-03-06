import { styled } from "@stitches/react"
import Header from "../components/Header"
import LogoCPU from "../assets/img/Logo CPU.png"
import { MaxWidthWrapper } from "../components/Global/MaxWidthWrapper"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { Footer } from "../components/Footer"

const MainContent = styled("main", {
	"&": {
		paddingTop: "15vh",
		display: "flex",
		gap: "50px",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",

		"& img": {
			width: "250px",
		},
		"& #content": {
			maxWidth: "600px",
			"& p": {
				marginBottom: "30px",
			},
		},
	},
})

const Section = styled("div", {
	"&": {
		"& h2": {
			width: "max-content",
			textAlign: "center",
			fontSize: "2em",
			padding: "15px 40px",
			margin: "50px auto",
			borderRadius: "50px 10px 50px 10px",
			background: "linear-gradient(to right, #C10F0F, #7d0909)",
		},

		"& #wrapperRegulamento": {
			background: "white",
			borderRadius: "10px",
			outline: "10px solid #951f1f",
			display: "flex",
			flexDirection: "column",
			color: "black",

			"& .row": {
				display: "flex",
				flex: 1,
				flexDirection: "column",

				"& .title": {
					display: "flex",
					alignItems: "center",
					margin: "10px 0",
					marginLeft: "20px",
					gap: "20px",

					"& .number": {
						background: "#B81212",
						width: "40px",
						height: "40px",
						display: "flex",
						borderRadius: "50%",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
						fontSize: "1em",
						fontWeight: "bold",
						textAlign: "center",
					},
				},

				"& .rowContent": {
					padding: "0px 30px",
					maxHeight: "0",
					height: "max-content",
					overflow: "hidden",
					transition: "all 300ms ease",
					background: "#f7f7f7",

					"& ol": {
						paddingLeft: "1em",
					},

					"& > ol > li > ol > li": {
						listStyleType: "lower-alpha",
					},
				},

				"&:hover .rowContent": {
					padding: "20px 30px",
					maxHeight: "200px",
				},
			},
		},
	},
})

function Home() {
	return (
		<div id="pageTop">
			<Header />
			<MaxWidthWrapper>
				<MainContent>
					<img src={LogoCPU} alt="Logo CPU" />
					<div id="content">
						<p>
							O CPU ?? um campeonato de programa????o que ocorre
							todos os anos. O evento ?? promovido pela Empresa
							J??nior de Computa????o da UESC - TecnoJr. Destinado
							aos alunos do curso de gradua????o na ??rea de
							Computa????o e afins (Ci??ncia da Computa????o,
							Engenharia de Computa????o, Sistemas de Informa????o,
							Matem??tica, etc.), com o objetivo de:
						</p>
						<ul>
							<li>
								Estimular o interesse pela programa????o de
								computadores{" "}
							</li>
							<li>
								Proporcionar a pr??tica nas disciplinas de
								programa????o{" "}
							</li>
							<li>
								Criar novos desafios aos estudantes das
								Faculdades ou Universidades da regi??o
							</li>
							<li>Entre outros.</li>
						</ul>
					</div>
				</MainContent>
				<Section>
					<h2 id="regulamento">Regulamento</h2>
					<div id="wrapperRegulamento">
						<div className="row">
							<div className="title">
								<span className="number">I</span>
								<h4>Modelos de Equipe</h4>
							</div>
							<div className="rowContent">
								<p>
									As equipes dever??o estar cadastradas pelo
									Form, sem a necessidade de pagamento para o
									CPU
								</p>
								<p>
									Equipes competitivas devem ser constitu??das
									obrigatoriamente por 3 integrantes
								</p>
								<p>
									Equipes caf?? com leite devem ser
									constitu??das por at?? 2 integrantes
								</p>
							</div>
						</div>
						<div className="row">
							<div className="title">
								<span className="number">II</span>
								<h4>Equipamentos</h4>
							</div>
							<div className="rowContent">
								Vai ser disponibilizado uma m??quina para cada
								equipe
							</div>
						</div>
						<div className="row">
							<div className="title">
								<span className="number">III</span>
								<h4>Aquecimento</h4>
							</div>
							<div className="rowContent">
								Acontecer?? das 12:00 ??s 14:00
							</div>
						</div>
						<div className="row">
							<div className="title">
								<span className="number">IV</span>
								<h4>Sobre a Entrada</h4>
							</div>
							<div className="rowContent">
								<ol>
									<li>
										A entrada de seu programa deve ser lida
										da entrada padr??o.
									</li>
									<li>
										A entrada ?? composta por v??rios casos de
										teste, cada um descrito em um n??mero de
										linhas que depende do problema.
									</li>
									<li>
										Quando uma linha da entrada cont??m
										v??rios valores, estes s??o separados por
										um ??nico espa??o em branco; a entrada n??o
										cont??m nenhum outro espa??o em branco.
									</li>
									<li>
										Cada linha, incluindo a ??ltima, cont??m o
										caractere final-de-linha.
									</li>
									<li>
										O final da entrada coincide com o final
										do arquivo.
									</li>
								</ol>
							</div>
						</div>
						<div className="row">
							<div className="title">
								<span className="number">V</span>
								<h4>Sobre o seu C??digo</h4>
							</div>
							<div className="rowContent">
								<ol>
									<li>
										O nome do arquivo de seu programa ?? o
										nome do problema seguido da extens??o da
										linguagem escolhida.
									</li>
									<li>
										O seu programa deve ser escrito em uma
										das linguagens permitidas: Java, C, C++
										ou Python 2 ou 3.
									</li>
									<li>
										Um problema pode ser resolvido em uma
										linguagem diferente de outro, se
										desejar.
									</li>
									<li>
										O seu programa deve ler a entrada do
										console (entrada padr??o).
									</li>
									<li>
										O seu programa deve gerar a sa????da em
										console (sa????da padr??o).
									</li>
								</ol>
							</div>
						</div>
						<div className="row">
							<div className="title">
								<span className="number">VI</span>
								<h4>Sobre a Saida</h4>
							</div>
							<div className="rowContent">
								<ol>
									<li>
										Quando uma linha da sa????da cont??m v??rios
										valores, estes devem ser separados por
										um ??nico espa??o em branco; a sa????da n??o
										deve conter nenhum outro espa??o em
										branco.
									</li>
									<li>
										Cada linha, incluindo a ??ltima, deve
										conter o caractere final-de-linha.
									</li>
								</ol>
							</div>
						</div>
						<div className="row">
							<div className="title">
								<span className="number">VII</span>
								<h4>Sobre a Competi????o</h4>
							</div>
							<div className="rowContent">
								<ol>
									<li>
										Linguagens aceitas:
										<ol>
											<li>
												C, extens??o ???.c??? ??? gcc -O2 -lm
											</li>
											<li>
												C++, extens??o ???.cpp??? ??? g++
												-std=c++11 -O2 -lm
											</li>
											<li>
												Java, extens??o ???.java??? ??? (LC
												ALL=en US.UTF-8 java ..)
											</li>
											<li>Python 2, extens??o ???.py2???</li>
											<li>Python 3, extens??o ???.py3???</li>
										</ol>
									</li>
									<li>
										As quest??es, embora escritas de forma
										original pela equipe organizadora, podem
										ser baseadas em problemas de mesma
										categoria j?? existentes.{" "}
									</li>
								</ol>
							</div>
						</div>
					</div>
				</Section>
			</MaxWidthWrapper>
			<span id="contato"></span>
			<Footer />
		</div>
	)
}

export default Home
