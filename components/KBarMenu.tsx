import React from 'react'
import type { ActionImpl, ActionId } from 'kbar'
import { useMatches, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults } from 'kbar'
import clsx from 'clsx'

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)',
}

export default function KBarMenu() {
  return (
    <KBarPortal>
      <KBarPositioner className="relative z-50 bg-black bg-opacity-25">
        <KBarAnimator className="rounded-lg overflow-hidden bg-gray-50" style={animatorStyle}>
          <KBarSearch
            className="w-full text-gray-700 box-border outline-none border-none px-7 py-4 bg-gray-10"
            placeholder="¿Qué quieres hacer hoy?" />
          <div className="px-3 py-4 border-t border-gray-200">
            <RenderResults />
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

const RenderResults = () => {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="font-medium px-4 py-2 text-xs text-gray-600">
            {item}
          </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={clsx(
          'px-4 py-2 flex font-medium items-center justify-between cursor-pointer rounded transition-all duration-75 ease-in-out', {
            'bg-gradient-to-tr from-rose-100 to-orange-100': active
          }
        )}
      >
        <div className="flex items-center space-x-2">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span
                      style={{
                        opacity: 0.5,
                        marginRight: 8,
                      }}
                    >
                      {ancestor.name}
                    </span>
                    <span
                      style={{
                        marginRight: 8,
                      }}
                    >
                      &rsaquo;
                    </span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span style={{ fontSize: 12 }}>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
)