interface ProviderComposerProps {
    components: React.JSXElementConstructor<React.PropsWithChildren<any>>[],
    children: React.ReactNode
}

const ProviderComposer: React.FC<ProviderComposerProps> = props => (
    <>{props.components.reduceRight((acc, Comp) => <Comp>{acc}</Comp>, props.children)}</>
);

export default ProviderComposer;