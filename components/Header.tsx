import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  IconButton,
  PaletteMode,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { FC } from 'react'

interface Props {
  mode: PaletteMode
  onChange?: () => void
}

const Header: FC<Props> = ({ mode, onChange }) => {
  const customTheme = useTheme()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: customTheme.palette.background.paper,
          color: customTheme.palette.text.primary,
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Switch
            checked={mode === 'dark'}
            onChange={onChange}
            color="secondary"
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
