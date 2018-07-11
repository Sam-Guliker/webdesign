const intersection = () => {
    if (IntersectionObserver) {

        window.addEventListener("load", function (event) {
            const boxElement = document.querySelector("#box");
            createObserver();
        }, false); function createObserver() {
            var observer;

            var options = {
                root: null,
                rootMargin: "0px",
                threshold: buildThresholdList()
            };

            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(boxElement);
        } function buildThresholdList() {
            var thresholds = [];

            for (var i = 1.0; i <= numSteps; i++) {
                var ratio = i / numSteps;
                thresholds.push(ratio);
            }

            thresholds.push(0);
            return thresholds;
        } function handleIntersect(entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > prevRatio) {
                    entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
                } else {
                    entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
                }

                prevRatio = entry.intersectionRatio;
            });
        }
    } else {
        return
    }
}
export default intersection