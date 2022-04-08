interface ProviderComposerComponentProps {
    components: React.JSXElementConstructor<React.PropsWithChildren<any>>[],
    children: React.ReactNode
}

const ProviderComposerComponent: React.FC<ProviderComposerComponentProps> = props => (
    <>{props.components.reduceRight((acc, Comp) => <Comp>{acc}</Comp>, props.children)}</>
);

export default ProviderComposerComponent;