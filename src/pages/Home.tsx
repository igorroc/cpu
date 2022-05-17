import { styled } from "@stitches/react"
import Header from "../components/Header"
import LogoCPU from "../assets/img/Logo CPU.png"
import { MaxWidthWrapper } from "../components/Global/MaxWidthWrapper"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

const MainContent = styled("main", {
	"&": {
		marginTop: "15vh",
		display: "flex",
		gap: "50px",
		justifyContent: "center",
		alignItems: "center",

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
				},

				"&.rowOpen .rowContent": {
					padding: "20px 30px",
					maxHeight: "200px",
				},
			},
		},
	},
})

function Home() {
	function handleShow(ev: any) {
		console.log(ev)
		ev.target.classList.toggle("rowOpen")
	}

	return (
		<div>
			<Header />
			<MaxWidthWrapper>
				<MainContent>
					<img src={LogoCPU} alt="Logo CPU" />
					<div id="content">
						<p>
							O CPU é um campeonato de programação que ocorre
							todos os anos. O evento é promovido pela Empresa
							Júnior de Computação da UESC - TecnoJr. Destinado
							aos alunos do curso de graduação na área de
							Computação e afins (Ciência da Computação,
							Engenharia de Computação, Sistemas de Informação,
							Matemática, etc.), com o objetivo de:
						</p>
						<ul>
							<li>
								Estimular o interesse pela programação de
								computadores{" "}
							</li>
							<li>
								Proporcionar a prática nas disciplinas de
								programação{" "}
							</li>
							<li>
								Criar novos desafios aos estudantes das
								Faculdades ou Universidades da região
							</li>
							<li>Entre outros.</li>
						</ul>
					</div>
				</MainContent>
				<Section>
					<h2>Regulamento</h2>
					<div id="wrapperRegulamento">
						<div className="row" onClick={handleShow}>
							<div className="title">
								<span className="number">I</span>
								<h4>Modelos de Equipe</h4>
							</div>
							<div className="rowContent">
								As equipes deverão estar cadastradas pelo Form,
								sem a necessidade de pagamento para o CPU
								COMPETITIVO Equipes participantes devem ser
								constituídas obrigatoriamente por 4 integrantes
							</div>
						</div>
						<div className="row" onClick={handleShow}>
							<div className="title">
								<span className="number">II</span>
								<h4>Equipamentos</h4>
							</div>
							<div className="rowContent">
								As equipes deverão estar cadastradas pelo Form,
								sem a necessidade de pagamento para o CPU
								COMPETITIVO Equipes participantes devem ser
								constituídas obrigatoriamente por 4 integrantes
							</div>
						</div>
						<div className="row" onClick={handleShow}>
							<div className="title">
								<span className="number">III</span>
								<h4>Linguagens</h4>
							</div>
							<div className="rowContent">
								As equipes deverão estar cadastradas pelo Form,
								sem a necessidade de pagamento para o CPU
								COMPETITIVO Equipes participantes devem ser
								constituídas obrigatoriamente por 4 integrantes
							</div>
						</div>
						<div className="row" onClick={handleShow}>
							<div className="title">
								<span className="number">IV</span>
								<h4>Material de apoio</h4>
							</div>
							<div className="rowContent">
								As equipes deverão estar cadastradas pelo Form,
								sem a necessidade de pagamento para o CPU
								COMPETITIVO Equipes participantes devem ser
								constituídas obrigatoriamente por 4 integrantes
							</div>
						</div>
						<div className="row" onClick={handleShow}>
							<div className="title">
								<span className="number">V</span>
								<h4>Aquecimento</h4>
							</div>
							<div className="rowContent">
								As equipes deverão estar cadastradas pelo Form,
								sem a necessidade de pagamento para o CPU
								COMPETITIVO Equipes participantes devem ser
								constituídas obrigatoriamente por 4 integrantes
							</div>
						</div>
					</div>
				</Section>
			</MaxWidthWrapper>
		</div>
	)
}

export default Home
