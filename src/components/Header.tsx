import { Menubar } from 'primereact/menubar';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
    { label: 'Especificaciones', icon: 'pi pi-fw pi-calendar', to: '/especificaciones' },
    { label: 'Galería', icon: 'pi pi-fw pi-pencil', to: '/galeria' },
    { label: 'Próximamente', icon: 'pi pi-fw pi-cog', to: '/proximamente' },
    { label: 'Contacto', icon: 'pi pi-fw pi-file', to: '/contacto' },
  ];

const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

return (
    <div className="card">
        <Menubar
        model={items.map((item) => ({
          template: (
            <NavLink to={item.to} className="p-menuitem-link">
              <i className={`pi ${item.icon}`} />
              <span>{item.label}</span>
            </NavLink>
          ),
        }))}
        start={start}
      />
    </div>
)
}
