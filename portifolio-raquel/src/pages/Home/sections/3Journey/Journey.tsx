import { Box, Modal, Typography } from "@mui/material"
import Section from "../../../../Components/Section/Section"
import AnimBox from "../../../../Components/AnimBox/AnimBox"
import PhotoCard from "./Components/PhotoCard/PhotoCard"
import openConde from "../../../../assets/images/openConde.jpg"
import MeuBotao from "../../../../Components/Button/Button"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useState } from "react"


const Journey = () => {
    type SelectedPhoto = {
        image: string;
        title: string;
        fullDescription: string;
    }

    const [openModal, setOpenModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto | null>(null)


    return (

        <Section id="journey"
            sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                minHeight: "250vh",
                border: "3px solid black"


            }}
        >


            <AnimBox
                sx={{
                    mt: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6

                }}


            >
                <Typography variant="h1" sx={{ textAlign: "center", }}>
                    Minha trajetória
                </Typography>
                <Typography variant="h2">
                    Nessa parte, pretendo apresentar um pouco da minha jornada no mundo da luta, mostrando minhas principais conquistas no jiu jitsu desde o início da minha jornada até esse ano!
                </Typography>
            </AnimBox>
            <Box>
                <Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 6,
                            flexDirection: "column",
                            mt: 8,
                            //border: "3px solid white",
                            alignItems: "center",
                            justifyContent: "center"
                        }}

                    >

                        <Typography variant="h1" sx={{ textAlign: "center" }}>
                            2016
                        </Typography>


                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { 
                                    xs: "repeat(2, 1fr)", 
                                    md: "repeat(4, 1fr)" 
                                },
                                gap: {xs: 2, md: 6},
                                justifyContent: "center",
                                height: "70vh",
                                width: "100%",
                                maxWidth: {xs: "100%", md: "1120px"},
                                //border: "3px solid white",
                                alignItems: "flex-start"
                            }}
                        >
                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: {xs: 2, md: 6},
                            flexDirection: "column",
                            //border: "2px solid white",
                            alignItems: "center",
                            justifyContent: "center"
                        }}

                    >
                        <Typography variant="h1" sx={{ 
                            mt: {xs: 15, md: 8}, 
                            textAlign: "center" }}>
                            2016
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { 
                                    xs: "repeat(2, 1fr)", 
                                    md: "repeat(4, 1fr)" 
                                },
                                gap: 6,
                                justifyContent: "center",     
                                //border: "3px solid white",
                                alignItems: "flex-start"
                            }}
                        >



                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                            <PhotoCard
                                image={openConde}
                                title="Open Conde"
                                shortDescription="Esse foi meu campeonato mais foda"
                                fullDescription="Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                onOpen={() => {
                                    setSelectedPhoto({
                                        image: openConde,
                                        title: "Open Conde",
                                        fullDescription: "Foi o campeonato mais dificil da minha vida, fiz 12 lutas com campeãs mundiais e fechei a categoria com Marcela 'furacão', um dos fenomenos da cidade"
                                    })
                                    setOpenModal(true)
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>



            <Modal

                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        p: 3,
                        maxWidth: "100%",
                        maxHeight: "90vh",
                        objectFit: "contain",
                        display: "flex",
                        border: "3px solid white",
                        borderRadius: 1,
                        flexDirection: "column",
                        gap: 3,
                        overflow: "auto",
                        "&::-webkit-scrollbar": {
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#14005c",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#cfcfcf",
                        },
                    }}
                >
                    {selectedPhoto && (
                        <>

                            <Box
                                component="img" sx={{ maxHeight: "560px", maxWidth: "800px", display: "flex", border: "3px solid white", borderRadius: 20 }}
                                src={selectedPhoto.image}
                            />
                            <Typography sx={{ textAlign: "center" }}>{selectedPhoto.title}</Typography>
                            <Typography>{selectedPhoto.fullDescription}</Typography>
                        </>
                    )}

                </Box>
            </Modal>

            <MeuBotao
                href="#contact"
                variant="outlined"
                startIcon={<ContactPageIcon />}
                sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    fontSize: {
                        xs: "0.5rem",
                        md: "0.8rem",
                    },
                    top: 15,
                    transform: "translateX(450px)",
                    maxWidth: '95%'
                }}
            >
                Contact Me
            </MeuBotao>
            <MeuBotao
                href="#home"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    fontSize: {
                        xs: "0.5rem",
                        md: "0.8rem",
                    },
                    top: 15,
                    transform: "translateX(-550px)",
                    maxWidth: '95%'
                }}
            >

                Voltar
            </MeuBotao>
        </Section>
    )



}

export default Journey
