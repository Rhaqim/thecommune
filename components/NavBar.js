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

import Logo from './logo'

const LinkItem = ({ href, children, path }) => {
    const active = path === href
    const inActiveColor = useColorModeValue('grey.200', 'WhiteAlpha.900')
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inActiveColor} >
                {children}
            </Link>
        </NextLink>
    )
}


const NavBar = props => {
    const [isOpen, setIsOpen] = React.useState(false)
    const colorMode = useColorModeValue('gray', 'grayDark')
    const bg = useColorModeValue('WhiteAlpha.400', 'BlackAlpha.400')
    const borderColor = useColorModeValue('gray.200', 'gray.200')

    const handleClick = () => setIsOpen(!isOpen)

    const { path } = props

    return (
        <Box
            as='nav'
            position='fixed'
            w={'100%'}
            bg={bg}
            style={{ backdropFilter: 'blur(2px)' }}
            zIndex={1}
            top='0'
            left='0'
            right='0'
            color={colorMode}
            borderBottomWidth='1px'
            borderBottomColor={borderColor}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            p={4}
            py={2}
            px={6}
            boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
            {...props}
        >
            <Container maxW='1450px'
                p={2}
                wrap="wrap"
                align="center"
                justify="space-between">
                <Flex align='center' justify='space-between'>
                    <LinkItem href='/'>
                        <Heading as='h1' size='lg'>
                            <Box as='span' color='gray.500'>
                                <Logo />
                            </Box>
                        </Heading>
                    </LinkItem>
                    <Box display='flex' alignItems='center'>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            display={{ base: 'none', md: 'flex' }}
                            width={{ base: 'full', md: 'auto' }}
                            alignItems="center"
                            flexGrow={1}
                            mt={{ base: 4, nmd: 0 }}
                            mr={5}>
                            <LinkItem href='/restaurants' path={path}>Restaurants</LinkItem>{' '}
                            <LinkItem href='/events' path={path}>Events</LinkItem>{' '}
                            <LinkItem href='/about' path={path}>About</LinkItem>{' '}
                            <LinkItem href='/contact' path={path}>Contact</LinkItem>{' '}
                            <LinkItem href={'/login'}>Log in</LinkItem>
                            <LinkItem href={'/signup'}>Sign up</LinkItem>
                        </Stack>
                        <ThemeToggleButton />
                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
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
                                    bg={useColorModeValue('whiteAlpha.900','blackAlpha.900')}
                                    color={colorMode}
                                    borderColor={borderColor}
                                >
                                    <NextLink href={'/'} passHref>
                                        <MenuItem as={Link}>Home</MenuItem>
                                    </NextLink>
                                    <NextLink href={'/about'} passHref>
                                        <MenuItem as={Link}>About</MenuItem>
                                    </NextLink>
                                    <NextLink href={'/contact'} passHref>
                                        <MenuItem as={Link}>Contact</MenuItem>
                                    </NextLink>
                                    <NextLink href={'/login'} passHref>
                                        <MenuItem as={Link}>Login</MenuItem>
                                    </NextLink>
                                    <NextLink href={'/signup'} passHref>
                                        <MenuItem as={Link}>Sign up</MenuItem>
                                    </NextLink>
                                    <MenuItem as={Link} href={"https://github.com/rhaqim/"}>My Source</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default NavBar