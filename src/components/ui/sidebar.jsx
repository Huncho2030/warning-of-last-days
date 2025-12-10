"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./utils";
import { useIsMobile } from "./use-mobile";
import { TooltipProvider } from "./tooltip";

// Constants
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

// Sidebar context
const SidebarContext = React.createContext(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
}

// Sidebar Provider
export function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) setOpenProp(openState);
      else _setOpen(openState);
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o);
  }, [isMobile, setOpen, setOpenMobile]);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={{ "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-icon": SIDEBAR_WIDTH_ICON, ...style }}
          className={cn("group/sidebar-wrapper flex min-h-screen w-full", className)}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

// Main Sidebar wrapper
export function Sidebar(props) {
  return <SidebarProvider {...props} />;
}

// Simple stub components for all the other exports
export const SidebarContent = ({ children, ...props }) => <div data-slot="sidebar-content" {...props}>{children}</div>;
export const SidebarFooter = ({ children, ...props }) => <div data-slot="sidebar-footer" {...props}>{children}</div>;
export const SidebarHeader = ({ children, ...props }) => <div data-slot="sidebar-header" {...props}>{children}</div>;
export const SidebarInput = ({ children, ...props }) => <div data-slot="sidebar-input" {...props}>{children}</div>;
export const SidebarInset = ({ children, ...props }) => <div data-slot="sidebar-inset" {...props}>{children}</div>;
export const SidebarGroup = ({ children, ...props }) => <div data-slot="sidebar-group" {...props}>{children}</div>;
export const SidebarGroupLabel = ({ children, ...props }) => <div data-slot="sidebar-group-label" {...props}>{children}</div>;
export const SidebarGroupAction = ({ children, ...props }) => <div data-slot="sidebar-group-action" {...props}>{children}</div>;
export const SidebarGroupContent = ({ children, ...props }) => <div data-slot="sidebar-group-content" {...props}>{children}</div>;
export const SidebarMenu = ({ children, ...props }) => <div data-slot="sidebar-menu" {...props}>{children}</div>;
export const SidebarMenuItem = ({ children, ...props }) => <div data-slot="sidebar-menu-item" {...props}>{children}</div>;
export const SidebarMenuButton = ({ children, ...props }) => <div data-slot="sidebar-menu-button" {...props}>{children}</div>;
export const SidebarMenuAction = ({ children, ...props }) => <div data-slot="sidebar-menu-action" {...props}>{children}</div>;
export const SidebarMenuBadge = ({ children, ...props }) => <div data-slot="sidebar-menu-badge" {...props}>{children}</div>;
export const SidebarMenuSkeleton = ({ children, ...props }) => <div data-slot="sidebar-menu-skeleton" {...props}>{children}</div>;
export const SidebarMenuSub = ({ children, ...props }) => <div data-slot="sidebar-menu-sub" {...props}>{children}</div>;
export const SidebarMenuSubItem = ({ children, ...props }) => <div data-slot="sidebar-menu-sub-item" {...props}>{children}</div>;
export const SidebarMenuSubButton = ({ children, ...props }) => <div data-slot="sidebar-menu-sub-button" {...props}>{children}</div>;
export const SidebarRail = ({ children, ...props }) => <div data-slot="sidebar-rail" {...props}>{children}</div>;
export const SidebarSeparator = ({ children, ...props }) => <div data-slot="sidebar-separator" {...props}>{children}</div>;
export const SidebarTrigger = ({ children, ...props }) => <div data-slot="sidebar-trigger" {...props}>{children}</div>;
