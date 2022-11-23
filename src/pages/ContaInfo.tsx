import { Text } from "@chakra-ui/react"
import userEvent from "@testing-library/user-event"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => {
    const { user } = useContext(AppContext)

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Text fontSize='xl'>
                Nome: { user?.name }
            </Text>
            <Text fontSize='xl'>
                Email: { user?.email }
            </Text>
            <a href='/conta/1'>
                Voltar
            </a>
        </>
    )
}

export default ContaInfo
