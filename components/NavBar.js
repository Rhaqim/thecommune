import NextLink from 'next/link'
import React from 'react'
import {
    Container,
    Box,
    Link,
    Heading,
    Stack,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, children }) => (
    <NextLink href={href} passHref>
        <Link>{children}</Link>
    </NextLink>
)


const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const colorMode = useColorModeValue('gray', 'grayDark')
    const bg = useColorModeValue('white', 'grayDark')
    const color = useColorModeValue('gray.800', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.200')

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <Box
            as='nav'
            position='fixed'
            top='0'
            left='0'
            right='0'
            zIndex='100'
            bg={bg}
            color={color}
            borderBottomWidth='1px'
            borderBottomColor={borderColor}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            p={4}
            py={2}
            px={6}
            boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
        >
            <Container maxW='1500px'>
                <Flex align='center' justify='space-between'>
                    <LinkItem href='/'>
                        <Heading as='h1' size='lg' fontWeight='normal'>
                            <Box as='span' color='gray.500'>
                                Home
                            </Box>
                        </Heading>
                    </LinkItem>
                    <Box display='flex' alignItems='center'>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList
                                // isOpen={isOpen}
                                onClick={handleClick}
                                bg={bg}
                                color={color}
                                borderColor={borderColor}
                            >
                                <MenuItem>
                                    <LinkItem href='/'>Home</LinkItem>
                                </MenuItem>
                                <MenuItem>
                                    <LinkItem href='/about'>About</LinkItem>
                                </MenuItem>
                                <MenuItem>
                                    <LinkItem href='/contact'>Contact</LinkItem>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <ThemeToggleButton />
                        {/* <IconButton
                            aria-label='Toggle dark mode'
                            icon='moon'
                            variant='ghost'
                            onClick={() => {
                                const newMode = colorMode === 'gray' ? 'grayDark' : 'gray'
                                localStorage.setItem('theme', newMode)
                            }}
                        /> */}
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default NavBar